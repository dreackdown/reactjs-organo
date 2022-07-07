import './Dropdown.css'

const ListaSuspensa = (props) => {



  return (
    <div className='dropdown'>
      <label>{props.label}</label>
      <select onChange={e => props.aoAlterado(e.target.value)} required={props.obrigatorio} value={props.valor}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa