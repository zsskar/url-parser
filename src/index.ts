class URLParser {

    private url: URL;

    constructor(url: string) {
        try {
            this.url = new URL(url);
        } catch (error) {
            throw new Error('Invalid URL');
        }
    }

    getProtocol(): string {
        return this.url.protocol.replace(':', '');
    }

    getHostname(): string {
        return this.url.hostname;
    }

    getPathname(): string {
        return this.url.pathname;
    }

    getQueryParams(): Record<string, string> {
        const params: Record<string, string> = {};
        this.url.searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }

    getHash(): string {
        return this.url.hash.replace('#', '');
    }

    getPathSegments(): string[] {
        return this.url.pathname.split('/').filter(segment => segment.length > 0);
    }

    getTotalQueryParams(): number {
        const size =  Object.keys(this.getQueryParams()).length;
        return size;
    }

    getTotalPathSegments(): number {
        const size =  Object.keys(this.getPathSegments()).length;
        return size;
    }
}

