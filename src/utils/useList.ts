// @ts-nocheck
import { useCallback, useRef, useState } from 'react'

const useDynamicList = (initialList = []) => {
  const counterRef = useRef(-1)

  const keyList = useRef([])

  const setKey = useCallback((index) => {
    counterRef.current += 1
    keyList.current.splice(index, 0, counterRef.current)
  }, [])

  const [list, setList] = useState(() => {
    initialList.forEach((_, index) => {
      setKey(index)
    })
    return initialList
  })

  const resetList = useCallback((newList) => {
    console.log('resetList')
    keyList.current = []
    setList(() => {
      newList.forEach((_, index) => {
        setKey(index)
      })
      return newList
    })
  }, [])

  const insert = useCallback((index, item) => {
    setList((l) => {
      const temp = [...l]
      temp.splice(index, 0, item)
      setKey(index)
      return temp
    })
  }, [])

  const getKey = useCallback((index) => keyList.current[index], [])

  const getIndex = useCallback(
    (key) => keyList.current.findIndex((ele) => ele === key),
    [],
  )

  const merge = useCallback((index, items) => {
    setList((l) => {
      const temp = [...l]
      items.forEach((_, i) => {
        setKey(index + i)
      })
      temp.splice(index, 0, ...items)
      return temp
    })
  }, [])

  const replace = useCallback((index, item) => {
    setList((l) => {
      const temp = [...l]
      temp[index] = item
      return temp
    })
  }, [])

  const remove = useCallback((index) => {
    setList((l) => {
      const temp = [...l]
      temp.splice(index, 1)

      // remove keys if necessary
      try {
        keyList.current.splice(index, 1)
      } catch (e) {
        console.error(e)
      }
      return temp
    })
  }, [])

  const move = useCallback((oldIndex, newIndex) => {
    if (oldIndex === newIndex) {
      return
    }
    setList((l) => {
      const newList = [...l]
      const temp = newList.filter((_, index) => index !== oldIndex)
      temp.splice(newIndex, 0, newList[oldIndex])

      // move keys if necessary
      try {
        const keyTemp = keyList.current.filter((_, index) => index !== oldIndex)
        keyTemp.splice(newIndex, 0, keyList.current[oldIndex])
        keyList.current = keyTemp
      } catch (e) {
        console.error(e)
      }

      return temp
    })
  }, [])

  const push = useCallback((item) => {
    setList((l) => {
      setKey(l.length)
      return l.concat([item])
    })
  }, [])

  const pop = useCallback(() => {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(0, keyList.current.length - 1)
    } catch (e) {
      console.error(e)
    }

    setList((l) => l.slice(0, l.length - 1))
  }, [])

  const unshift = useCallback((item) => {
    setList((l) => {
      setKey(0)
      return [item].concat(l)
    })
  }, [])

  const shift = useCallback(() => {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(1, keyList.current.length)
    } catch (e) {
      console.error(e)
    }
    setList((l) => l.slice(1, l.length))
  }, [])

  return {
    list,
    insert,
    merge,
    replace,
    remove,
    getKey,
    getIndex,
    move,
    push,
    pop,
    unshift,
    shift,
    resetList,
  }
}

export default useDynamicList
