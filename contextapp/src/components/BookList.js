import React, {  useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const BookList = () => {
    const { isLightTheme, light, dark}  = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{ background: theme.ui }}>the way of king</li>
                <li style={{ background: theme.ui }}>the name of the wind</li>
                <li style={{ background: theme.ui }}>the final empire</li>
            </ul>
        </div>
    )
}
export default BookList


// export default class BookList extends Component {
//     static contextType = ThemeContext
//     render() {
//         const { isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>the way of king</li>
//                     <li style={{ background: theme.ui }}>the name of the wind</li>
//                     <li style={{ background: theme.ui }}>the final empire</li>
//                 </ul>
//             </div>
//         )
//     }
// }