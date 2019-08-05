export default (param = {}, pandName) => {
    const { userName, passWord, email, passWordEnd } = param;
    switch (pandName) {
        case 'zc':
            if (userName === '' || userName.length <11) {
                return {
                    status: false,
                    msg: '您的手机号不能少于11位'
                }
            }
            if (email === '' || email.length <4) {
                return {
                    status: false,
                    msg: '验证码不能少于4位'
                }
            }
            if (passWord === '' || passWord.length <6) {
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
            // return true;
            
    }
    switch (pandName) {
        case 'dl':

            if (userName === '' || userName.length <11) {
                return {
                    status: false,
                    msg: '您的手机号不能少于11位'
                }
            }
            if (passWord === '' || passWord.length <6) {
                return {
                    status: false,
                    msg: '您的密码名不能为小于6位'
                }
            }
            // return true;
        }
    }