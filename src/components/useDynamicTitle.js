import { useEffect } from 'react'

const useDynamicTitle = (title) => {
    useEffect(()=> {
        document.title = title;

        return(() => {
            document.title = "Neo Elevators"
        })
    })

}

export default useDynamicTitle