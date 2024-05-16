import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService{

    private numberOfgenerateIds = 0;
    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

    public generateUniqueIdsWithPrefix(prefix: string): string{

        if(!prefix || !this.validId.test(prefix)){
            throw Error('Prefix can not be empty');
        }

        const uniqueId = this.generateUniqueId();
        this.numberOfgenerateIds++;
        return  `${prefix}-${uniqueId}`;
    }

    public getNumberOfGeneratedUniqueIds():number{
        return this.numberOfgenerateIds;
    }

    private generateUniqueId(): string{
        return uuidv4();
    }

}