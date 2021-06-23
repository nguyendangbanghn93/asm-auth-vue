import axios from "axios"
export async function loadAccount({ commit }, token) {
    commit('fetchAccountBegin')
   

    const tokenWeb = localStorage.getItem("LOCAL_STORAGE_TOKEN_NAME");
    fetch("http://localhost:8088/api/user/information", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tokenWeb}`,
        },
    })
        .then((res) => {
            console.log(res);
            try {
                let json = res.json();
                return json;
            } catch (error) {
                return new Promise((resolve, reject) => reject(res.text()));
            }
        })
        .then((data) => {
            commit('fetchAccountSuccess', {
                data: data
            })
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
            alert('Yêu cầu đăng nhập để truy cập trang')
        });
}