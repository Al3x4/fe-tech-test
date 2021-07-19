import { FC, useState } from 'react'
import { useDataFetcher } from 'hooks/useDataFetcher'
import Card from 'components/Card'
import { DatumI } from 'models/types'
import Modal from 'components/Modal'

const content_url =
  'https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data'

const Content: FC = () => {
  const [modal, setModal] = useState({ visible: false, data: {} as DatumI })
  const { data } = useDataFetcher(content_url)

  return (
    <>
      {modal.visible ? (
        <Modal data={modal.data} setModal={setModal}></Modal>
      ) : null}
      <div className='relative '>
        <h2 className='px-12 pt-12 text-blueGray-500 text-3xl text-light uppercase tracking-wide'>
          <i className='fas fa-video text-blueGray-600 mr-2'></i> Content
        </h2>

        <div className='px-4 md:px-10 mx-auto w-full pb-32 pt-8'>
          <div className='flex items-center justify-between flex-wrap'>
            {data.map((datum: DatumI) => {
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
    </>
  )
}

export default Content
