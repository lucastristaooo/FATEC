import Título from './Título.jsx'
function App(){
  return(
    <div>
      <Título nome="Lucas" paragrafo={false}/>
      <Título nome="Pedro" paragrafo={true}/>
      <Título nome="Chico" paragrafo={false}/>
      <Título nome="Guilherme" paragrafo={true}/>
    </div>
  )
}
export default App