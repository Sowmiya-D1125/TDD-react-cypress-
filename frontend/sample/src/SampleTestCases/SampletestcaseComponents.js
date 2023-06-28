import React, { useCallback, useEffect, useState } from "react";
import PokemonList from "../Pokeman/Pokeman";
import Product from "../Products/Product";
import list from './data.json';

const Child = ({ data }) => {
  const [show, setShow] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const [selected, setSelected] = useState('')
  console.log(data)
  console.log(Array.isArray(data))
  useEffect(() => {
    if (Array.isArray(data)) {
      setIsEnd(true)
    } else {
      setIsEnd(false)
    }
  }, [])

  useEffect(()=>{
    alert("hi")
  },[data])
  // console.log(!!Object.keys(data['All'])?.length)
  return (
    <div>
      {isEnd ? (
        data.map((val) => <p>**{val.value}</p>)
      ) : (
        <>
          {Object.keys(data).map((x) => {
            return (
              <div>
                <p
                  onClick={() => {
                    setSelected(x)
                    setShow(true)
                  }}
                >
                  {' '}
                  *{x}
                </p>

                {!!Object.keys(data[x])?.length && (
                  <div style={{ marginLeft: 10 }}>
                    {show && selected === x ? <Child data={data[x]} /> : ''}
                  </div>
                )}
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
const SampleComponents = () => {
  const [data, setData] = React.useState(list)
  const [keyword, setkeyword] = useState('')
  const [filteredlist, setFilteredList] = useState([])
  const handleSearch = () => {
    Object.keys(data).filter((val) => {
      if (val.toLocaleLowerCase() === keyword.toLocaleLowerCase()) {
        const fill = Object.fromEntries(Object.entries(data).filter(([key]) => key.includes(val)));
        console.log(fill)
        setData(fill)
        return false
      } else {
        setFilteredList(val)
        search(data[val],val)
        return false
      }
    })
  }
  const search = useCallback((param,parent) => {
    console.log(filteredlist)
    console.log(param)
    if (Array.isArray(param) === false) {
      Object.keys(param).filter((val) => {
        if (val.toLocaleLowerCase() === keyword.toLocaleLowerCase()) {
          const higher = Object.fromEntries(Object.entries(data).filter(([key])=>key.includes(parent)))
          const lower = Object.fromEntries(Object.entries(higher).filter(([key]) => key.includes(val)));
          console.log(lower);
          const fill = Object.fromEntries(Object.entries(param).filter(([key]) => key.includes(val)));
          console.log(fill)
          setData(fill)
          return false
        } else {
          search(param[val])
          setFilteredList(val)
          return false
        }
      })
    }
  }, [filteredlist])

  const handleSearchnew = () => {
    setData(data)
  }
  return (
    <div>
      <Product />
      <div data-testid="messageText">
        <h2>hello</h2>
      </div>
      <div>
        {/* <PokemonList /> */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Child data={data} />
        <div>
          <input type="text" onChange={(e) => setkeyword(e.target.value)} />
          <button onClick={handleSearchnew}>search</button>
        </div>
      </div>
    </div>
  )
}
export default SampleComponents;