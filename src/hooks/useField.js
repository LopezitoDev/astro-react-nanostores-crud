import { useEffect, useState } from "react"

export default function useField(type = "text", initialValue = "") {
  const [value, setValue] = useState(initialValue)

  // TODO: Make a useField accept a initialValue!

  const onChange = e => setValue(e.target.value)
  
  return {
    type,
    onChange,
    value
  }
}