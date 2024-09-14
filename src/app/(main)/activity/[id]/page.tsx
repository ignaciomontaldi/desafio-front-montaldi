import Menu from '@/components/Menu/Menu'
import { dateFormatter } from '@/utils/dateFunctions'
import "./page.css"
import TransactionDetail from '@/components/TransactionDetail/TransactionDetail'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import { getOneTransaction } from '@/services/transactions/transactions.service'


const DetailPage = async ({params}) => {
  const idParams = params.id;
  const token = headers().get("x-digital-access-token") ?? "";
  const {id} = await getUserAccount(token);
  const transaction = await getOneTransaction(String(id), idParams, token);
  return (
    <main className='bg-lightGray'>
      <section>
        <Menu />
      </section>
      <div id="current-page">
        <FaArrowRight />
        <p className='underline'>Tu actividad</p>
      </div>
      <section className='bg-lightGray' id="transaction-container">
        <TransactionDetail transaction={transaction} />
        <div id="btn-container">
          <button className="bg-[#CECECE]" id="home-btn"><Link href="/activity">Ir a inicio</Link></button>
          <button className="bg-ylw" id="download-voucher-btn">Descargar comprobante</button>
        </div>
      </section>
    </main>
  )
}
export default DetailPage