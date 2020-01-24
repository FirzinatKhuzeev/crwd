import axios from 'axios';
import { Photo } from '../store/landing/types';

export default class PhotosService {
    private limitPerPage = 30;
    private pageCount = 5;
    private apiUrl = 'https://api.unsplash.com/photos';
    private apiKey = 'YOUR_ACCESS_KEY';

    public async getPhotos(noPage = 1): Promise<Photo[]> {
        if (this.apiKey === 'YOUR_ACCESS_KEY') {
            console.error(
                'SET YOUR API KEY. Read more https://unsplash.com/documentation#authorization'
            );
        }
        const results = await this.getData(noPage);

        return this.pageCount > noPage ? results.concat(await this.getPhotos(++noPage)) : results;
    }

    private async getData(noPage = 1): Promise<Photo[]> {
        return axios
            .get<Photo[]>(this.apiUrl, {
                params: {
                    page: noPage,
                    per_page: this.limitPerPage,
                    client_id: this.apiKey
                }
            })
            .then(response => {
                return response.data as Photo[];
            });
    }
}
