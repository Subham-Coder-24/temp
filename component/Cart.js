import style from '../styles/Cart.module.css'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    const a = 'https://img.etimg.com/thumb/msid-98706570,width-300,height-225,imgsize-77318,,resizemode-75/adani-group-says-vinod-adani-is-part-of-promoter-group.jpg'
    return `${a}/${src}?w=${width}&q=${quality || 75}`
}
const Cart = () => {
    return (
        <div>
            <div>
                <Image
                    loader={myLoader}
                    src="me.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>
            <div>
                heading
            </div>
            <div>
                vmfjnhrghvcnm kdfjriuhhvdcb nmkdfjrhvb cnmxldljfrhbvd ncmkvdjgrhvb cmnkvjh bcmckdvjd bcmkdvdh cbnknjlv hbnmkjvh nmjvbhb cmncjvhbcnmnjvh bcnjvhdbcjhvdcbmcvjf cnmgrfvhbc nkxjicdufeygvcdb ncjhvudgbd cnm,j,cduhvfygcb cmncjvhbcnmnjvh bcnjvhdbcjhvdcbmcvjf cnmgrfvhbc nkxjicdufeygvcdb ncjhvudgbd cnm,j,cduhvfygcb
            </div>
        </div>
    )
}

export default Cart