const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer")

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please enter City's name before Searching`;
        datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b49447fef57dbdcfcd251950014cc2f0`
            // async me aane se time lagega isliye await
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            const arrData = [data];
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = ` <i class="fas fa-sun" style= "color: #eccc68; margin-top:17px"></i>`;
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = ` <i class="fas fa-cloud" style= "color: #f1f2f6; margin-top:17px"></i>`;
        
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = ` <i class="fas fa-cloud-rain" style= "color: #a4b0be; margin-top:17px"></i>`;
        
            }
            else {
                temp_status.innerHTML = ` <i class="fas fa-sun" style= "color: #eccc68; margin-top:17px"></i>`;
        
            }
            datahide.classList.remove("data_hide");
        }
        catch {
            city_name.innerText = `Please Enter the City name properly`;
            datahide.classList.add("data_hide");
        }

    }
}

submitBtn.addEventListener("click", getInfo);