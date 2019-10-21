import * as mongoose from 'mongoose';

export class DBlauncher {
    private URL: string = 'mongodb://localhost/database';

    public setup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.URL, { useNewUrlParser: true, useUnifiedTopology: true})     
        .then(() => console.log('Database working!!!'))
        .catch(e => console.log(e))
    }

    static launch (): any {
        const db = new DBlauncher();
        return db;
    }  
}