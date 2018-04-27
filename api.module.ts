import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AccountService } from './api/account.service';
import { DataHashService } from './api/dataHash.service';
import { DirectoryLoadService } from './api/directoryLoad.service';
import { DownloadService } from './api/download.service';
import { NodeService } from './api/node.service';
import { PublishAndSubscribeService } from './api/publishAndSubscribe.service';
import { SearchService } from './api/search.service';
import { TransactionAndAnnounceService } from './api/transactionAndAnnounce.service';
import { UploadService } from './api/upload.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AccountService,
    DataHashService,
    DirectoryLoadService,
    DownloadService,
    NodeService,
    PublishAndSubscribeService,
    SearchService,
    TransactionAndAnnounceService,
    UploadService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
