import { FC, useState } from 'react'
import Table from 'components/charts/Table'
import Card from 'components/Card'
import Modal from 'components/Modal'
import { useDataFetcher } from 'hooks/useDataFetcher'
import { DatumI } from 'models/types'

const url =
  'https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data'

const Overview: FC = () => {
  const [modal, setModal] = useState({ visible: false, data: {} as DatumI })
  const { data } = useDataFetcher(url)

  return (
    <>
      {modal.visible ? (
        <Modal data={modal.data} setModal={setModal}></Modal>
      ) : null}
      <div className='relative bg-gradient-to-t from-indigo-900 to-blueGray-900'>
        <h2 className='px-12 pt-12 text-blueGray-100 text-3xl text-light uppercase tracking-wide'>
          <i className='fas fa-medal text-blueGray-100 mr-2'></i> Top performers
        </h2>
        <div className='px-4 md:px-10 mx-auto w-full md:pt-24 pb-32 pt-8'>
          <div className='flex items-center justify-between flex-wrap'>
            {data.slice(0, 3).map((datum: DatumI) => {
              return (
                <Card
                  data={datum}
                  handleClick={() =>
                    setModal({
                      visible: true,
                      data: datum,
                    })
                  }
                ></Card>
              )
            })}
          </div>
        </div>
      </div>

      <div className='relative px-4 md:px-10 mx-auto w-full -mt-24 z-30'>
        <Table data={data} handleClick={setModal} />
      </div>
    </>
  )
}

export default Overview
