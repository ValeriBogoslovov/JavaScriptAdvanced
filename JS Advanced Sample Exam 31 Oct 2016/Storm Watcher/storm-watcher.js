/**
 * Created by Valeri on 7/18/2017.
 */

class Watcher {

    constructor(temperature, humidity, pressure, windSpeed) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
        this.id = Watcher.getID();
    }
    static getID(){
        if(!this._id){
            this._id = 0;
        }
        return this._id++;
    }
    toString() {
        let output = `Reading ID: ${this.id}\n`;
        output += `Temperature: ${this.temperature}*C\n`;
        output += `Relative Humidity: ${this.humidity}%\n`;
        output += `Pressure: ${this.pressure}hpa\n`;
        output += `Wind Speed: ${this.windSpeed}m/s\n`;
        if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
            output += `Weather: Stormy`
        } else {
            output += 'Weather: Not stormy';
        }

        return output;
    }
}

let record1 = new Watcher(32, 66, 760, 12);
let report1 = record1.toString();

let record2 = new Watcher(10, 40, 680, 30);
let report2 = record2.toString();
console.log(report1);
console.log(report2);

