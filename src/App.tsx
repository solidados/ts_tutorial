import { Product } from './components/Product'
import { useProducts } from './hooks/products';
import { Loader } from "./components/Loader";
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from "./components/Modal";
import { CreateProduct } from './components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';


function App() {
  const { loading, error, products, addProduct } = useProducts()
  // const [modal, setModal] = useState(false)
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}

      {modal && <Modal title='Create new product' onClose={closeModal}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button
        className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-1xl px-4 py-2'
        onClick={openModal}
      >+</button>
    </div>
  )
}

export default App;
