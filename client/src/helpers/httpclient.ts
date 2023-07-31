// import { useAuthStore } from '@/stores/auth.store';


export default class HttpClient {


    private getToken(): string | null {
       
        // const authStore = useAuthStore();
        // return authStore.apiToken;

        return "";
    }


    async getHeaders() {
        const token = this.getToken();
        let headers = {};
        if (token) {
            headers = {
                Authorization: `Bearer ${token}`
            };
        }
        return headers;
    }


    async get(url: string): Promise<any> {
        try {
            const headers = await this.getHeaders();
            const response = await fetch(url, {
                method: 'GET',
                headers
            });
            const data = await response.json();
            return data;
        } catch (error: any) {
            throw new Error(`Failed to get data: ${error.message}`);
        }
    }



    async post(url: string, body: FormData): Promise<any> {
        try {
            const headers = await this.getHeaders();
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: body,
            });
            const data = await response.json();
            return data;
        } catch (error: any) {
            throw new Error(`Failed to post data: ${error.message}`);
        }
    }


    async put(url: string, body: FormData): Promise<any> {
        try {
            const headers = await this.getHeaders();
            const response = await fetch(url, {
                method: 'PUT',
                headers,
                body: body,
            });
            const data = await response.json();
            return data;
        } catch (error: any) {
            throw new Error(`Failed to put data: ${error.message}`);
        }
    }



    async patch(url: string, body: FormData): Promise<any> {
        try {
            const headers = await this.getHeaders();
            const response = await fetch(url, {
                method: 'PATCH',
                headers,
                body: body,
            });
            const data = await response.json();
            return data;
        } catch (error: any) {
            throw new Error(`Failed to patch data: ${error.message}`);
        }
    }



    async delete(url: string): Promise<any> {
        try {
            const headers = await this.getHeaders();
            const response = await fetch(url, {
                method: 'DELETE',
                headers,
            });
            const data = await response.json();
            return data;
        } catch (error: any) {
            throw new Error(`Failed to delete data: ${error.message}`);
        }
    }
}