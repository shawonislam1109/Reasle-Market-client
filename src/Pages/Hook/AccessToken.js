// import { useEffect, useState } from "react"

// const useAccessToken = (email) => {
//     const [Token, setToken] = useState('')
//     useEffect(() => {
//         fetch(`http://localhost:5000/jwt?email=${email}`,)
//             .then(res => res.json())
//             .then(data => {
//                 if (data.accessToken) {
//                     console.log(data)
//                     localStorage.setItem('accessToken', data.accessToken)
//                     setToken('data.accessToken')
//                 }
//             })
//     }, [email])
//     return [Token];
// }

// export default useAccessToken; 