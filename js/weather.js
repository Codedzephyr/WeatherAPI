class Weather{
    constructor(state,city){
        this.apikey = '278c4cdb646d5f7fbf2b1d31f1ae27b0';
        this.state = state;
        this.city = city;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`);

        const responseData = await response.json();
        console.log(responseData);

        return responseData;

      
    }
//Change weather location
changeLocation (state,city){
    this.state = state;
    this.city = city;
}
}  