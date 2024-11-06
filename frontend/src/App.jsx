import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <div className=" px-4 sm:[5vm] md:px-[7vw] lg:[px-9vw]">
      <Routes>
         <Route path='/home' element={<home/>}  />
         <Route path='/collection' element={<collection/>} />
         <Route path='/about' element={<about/>} />
         <Route path='/contact' element={<contact/>} />
         <Route path='/product/:productid' element={<product/>} />
         <Route path='/cart' element={<cart/>} />
         <Route path='/login' element={<login/>} />
         <Route path='/placeorder' element={<placeorder/>} />
         <Route path='/oder' element={<oder/>} />


      </Routes>
    </div>
  )
}

export default App
