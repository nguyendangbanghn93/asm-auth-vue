export async function loadProducts({ commit }) {
    commit('fetchProductsBegin')
    const tokenWeb = localStorage.getItem("LOCAL_STORAGE_TOKEN_NAME");
    fetch("http://localhost:8088/api/products/list", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tokenWeb}`,
        },
    })
        .then((res) => {
            try {
                let json = res.json();
                return json;
            } catch (error) {
                return new Promise((resolve, reject) => reject(res.text()));
            }
        })
        .then((data) => {
            console.log("data trả về: ",data);
            commit('fetchProductsSuccess', {
                data: data
            })
        })
        .catch((error) => {
            console.log(error);
            alert('Yêu cầu đăng nhập để truy cập trang');
        });
}
