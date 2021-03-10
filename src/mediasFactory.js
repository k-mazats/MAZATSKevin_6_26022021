import {Image, Video} from '../src/classes/Medias.js'

const mediasFactory = (data) => {
    const medias = [];
    for(let item of data){
        if(item.hasOwnProperty("video")){
            medias.push(new Video(item));
        }else{
            medias.push(new Image(item));
        }
    }
    return medias;
}
export default mediasFactory