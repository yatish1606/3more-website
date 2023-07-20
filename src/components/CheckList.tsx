import icons from '../ui/icons'

const CheckList = ({ checkList }: { checkList: string[] }): JSX.Element => {
  return (
    <ul>
      {checkList.map((item: string, index: number) => (
        <li>
          <div className='check'> {icons.check} </div>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  )
}

const List = ({ list }: { list: string[] }): JSX.Element => {
  return (
    <ul>
      {list.map((item: string, index: number) => (
        <li className='li-reduced-padding'>
          <div className='dash'> - </div>&nbsp;&nbsp; <p>{item}</p>
        </li>
      ))}
    </ul>
  )
}

export { List, CheckList }
