import aes from './js/aes'
import md5 from './js/md5'
import rsa from './js/rsa'
import sm from "./sm"
import creat64Key from "./js/creat64Key"
const index = {
  ...aes,
  ...md5,
  ...rsa,
  ...sm,
  creat64Key
}
export default index
