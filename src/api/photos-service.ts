import axios from 'axios';

export default class PhotosService {
    public static getPhotos(): Promise<any> {
        return axios.get('https://picsum.photos/v2/list?page=1&limit=30');
    }
}
