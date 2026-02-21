import { DB } from "@/config/database"
import { formatCurrency } from "@/utils/formatCurrency";
import puppeteer from "puppeteer";

export const GET = async () => {
    try {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const bulanSekarang = now.toLocaleString('id-ID', { month: 'long' });


        const rows = await DB.panen.findMany({
            where: {
                tindakan: "jual",
                createdAt: {
                    gte: startOfMonth,
                    lt: startOfNextMonth
                }
            },
            select: {
                createdAt: true,
                jumlah: true,
                harga: true,
                keterangan: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        let tableHTML = `
            <div style="width: 85%; overflow-x: auto; margin-top: 20px; margin-left: auto; margin-right: auto;">
                <h2>Pendapatan Bulan <span style="color:red;">${bulanSekarang}</span></h2>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr>
                            <th style="border:1px solid #000; padding:8px;">No</th>
                            <th style="border:1px solid #000; padding:8px;">Tanggal</th>
                            <th style="border:1px solid #000; padding:8px;">Jumlah</th>
                            <th style="border:1px solid #000; padding:8px;">Harga</th>
                            <th style="border:1px solid #000; padding:8px;">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        let total = 0
        rows.forEach((row, index) => {
            total += Number(row.harga);
            tableHTML += `
                <tr>
                    <td style="border:1px solid #000; padding:8px;">
                        ${index + 1}
                    </td>
                    <td style="border:1px solid #000; padding:8px;">
                        ${new Date(row.createdAt).toLocaleDateString()}
                    </td>
                    <td style="border:1px solid #000; padding:8px;">
                        ${row.jumlah}
                    </td>
                    <td style="border:1px solid #000; padding:8px; text-align:right;">
                        Rp. ${formatCurrency(Number(row.harga))}
                    </td>
                    <td style="border:1px solid #000; padding:8px;">
                        ${row.keterangan ? row.keterangan : "-"}
                    </td>
                </tr>
            `;
        });
        
        tableHTML += `
            <tr>
                <td colspan="2" style="border:1px solid #000; padding:8px; font-weight:bold; text-align:right;">
                    TOTAL
                </td>
                <td style="border:1px solid #000; padding:8px; font-weight:bold; text-align:right;">
                    Rp. ${formatCurrency(total)}
                </td>
            </tr>
        `;        

        tableHTML += `
                    </tbody>
                </table>
            </div>
        `;


        // ---------- COST ------------
        const costs = await DB.cost.findMany({
            where: {
                createdAt: {
                    gte: startOfMonth,
                    lt: startOfNextMonth
                }
            },
            select: {
                harga: true,
                keterangan: true,
                createdAt: true,
            }
        })


        tableHTML += `
            <div style="break-before: page;"></div>
            <div style="width: 85%; overflow-x: auto; margin-top: 20px; margin-left: auto; margin-right: auto; margin-top: 15px;">
                <h2>Pengeluaran Bulan <span style="color:red;">${bulanSekarang}</span></h2>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr>
                            <th style="border:1px solid #000; padding:8px;">Tanggal</th>
                            <th style="border:1px solid #000; padding:8px;">Harga</th>
                            <th style="border:1px solid #000; padding:8px;">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        let total_cost = 0
        costs.forEach(cost => {
            total_cost += Number(cost.harga);
            tableHTML += `
                <tr>
                    <td style="border:1px solid #000; padding:8px;">
                        ${new Date(cost.createdAt).toLocaleDateString()}
                    </td>
                    <td style="border:1px solid #000; padding:8px; text-align:right;">
                        Rp. ${formatCurrency(Number(cost.harga))}
                    </td>
                    <td style="border:1px solid #000; padding:8px;">
                        ${cost.keterangan ? cost.keterangan : "-"}
                    </td>
                </tr>
            `;
        });

        const saldoAkhir = total - total_cost

        tableHTML += `
            <tr>
                <td colspan="1" style="border:1px solid #000; padding:8px; font-weight:bold; text-align:right;">
                    TOTAL
                </td>
                <td style="border:1px solid #000; padding:8px; font-weight:bold; text-align:right;">
                    Rp. ${formatCurrency(total_cost)}
                </td>
            </tr>
            <tr>
                <td colspan="1" style="border:1px solid #000; padding:8px; font-weight:bold; text-align:right;">
                    SALDO AKHIR
                </td>
                <td style="border:1px solid #000; padding:8px; font-weight:bold; text-align:right;">
                     Rp. ${formatCurrency(total)} -  Rp. ${formatCurrency(total_cost)} =  Rp. ${formatCurrency(saldoAkhir)}
                </td>
            </tr>
        `;        

        tableHTML += `
                    </tbody>
                </table>
            </div>
        `;



        const dateNow = now.toISOString().replace(/[:.]/g, "-");

        // ===== Puppeteer Start =====
        const browser = await puppeteer.launch({
            headless: true
        });

        const page = await browser.newPage();

        await page.setContent(tableHTML, {
            waitUntil: "networkidle0"
        });

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
        });

        await browser.close();

        console.log(`pendapatan-${dateNow}.pdf`);
        console.log("PDF berhasil dibuat");

        return new Response(pdfBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename=pendapatan-${dateNow}.pdf`
            }
        });
    }catch(error) {
        console.log(error)
    }
}