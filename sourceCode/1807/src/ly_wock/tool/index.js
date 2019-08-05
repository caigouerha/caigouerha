export default (param = {}, pandName) => {
    const { userName, passWord, email, passWordEnd } = param;
    switch (pandName) {
        case 'zc':
            if (userName === '' || userName !== '13463115348') {
                return {
                    status: false,
                    msg: '您的手机号不能少于11位'
                }
            }
            if (email === '' || email !== '1016') {
                return {
                    status: false,
                    msg: '验证码不能少于4位'
                }
            }
            if (passWord === '' || passWord !== '5211314lxs') {
                return {
                    status: false,
                    msg: '您的密码不能为小于6位'
                }
            }
            if (passWord !== passWordEnd) {

                return {
                    status: false,
                    msg: '您的两次密码不相同'
                }
            }
            return true;
            
    }
    switch (pandName) {
        case 'dl':

            if (userName !== '13463115348' || userName === '') {
                return {
                    status: false,
                    msg: '您的手机号不能少于11位'
                }
            }
            if (passWord !== '5211314lxs' || passWord.length === '') {
                return {
                    status: false,
                    msg: '您的密码名不能为小于6位'
                }
            }
            return true;
       }
    }