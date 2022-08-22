import axios from 'axios';
const headAddress = `http://localhost:81`;
// const headAddress = `http://www.myro.co.kr:81`;

export default function axiosFunc(_method, _url, _data) {
  return new Promise(async (resolve, reject) => {
    // console.log(_method, _url, _data);

    let dataFromServer;
    if (_method === 'GET' || _method === 'get') {
      try {
        // console.log(12312312321);
        dataFromServer = await axios({
          //token
          method: _method,
          url: `${headAddress}/${_url}`,
          params: _data,
        });
        // console.log(dataFromServer);
        resolve(dataFromServer.data);
      } catch (e) {
        reject(console.log('에러'));
      } //end try catch
    } //end if
    else if (
      _method === 'POST' ||
      _method === 'PUT' ||
      _method === 'DELETE' ||
      _method === 'post' ||
      _method === 'put' ||
      _method === 'delete'
    ) {
      try {
        dataFromServer = await axios({
          //token
          method: _method,
          url: `${headAddress}/${_url}`,
          data: _data,
        });
        resolve(dataFromServer.data);
      } catch (e) {
        console.log(e);
      } //end try catch
    } //end else if
    else {
      reject(console.log('에러'));
    } //end else
  });
}
