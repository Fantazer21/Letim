import React, {useRef, useState} from 'react';




 const Input = () => {

     let [value,setValue] = useState('23')

     let inpRef = useRef<HTMLInputElement>(null)


     function save() {
        let x = inpRef.current as HTMLInputElement
         setValue(x.value)
     }

   return (
       <div>
           <input ref={inpRef} onChange={save}/> <div>{value}</div>
       </div>
   )

 }

export default Input
