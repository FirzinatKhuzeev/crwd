import axios from 'axios';

export class RestDataSource {
    getPhotos(): Promise<any> {
        return axios.get('https://picsum.photos/v2/list?page=2&limit=10');
    }
}