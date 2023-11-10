import { DynamicModule, Module } from '@nestjs/common';

type storeOptions = {
  store: 'redis' | 'maria';
  size: number;
};

const STORE_OPTION: storeOptions = {
  store: 'maria',
  size: 100,
};

@Module({
  providers: [
    {
      provide: 'STORE_OPTION',
      useValue: STORE_OPTION,
    },
  ],
  exports: ['STORE_OPTION'],
})
class RootCacheStoreModule {}

@Module({
  providers: [
    {
      provide: 'STORE_OPTION',
      useValue: STORE_OPTION,
    },
  ],
})
class CacheStoreModule {
  static forRoot(options?: storeOptions): DynamicModule {
    const storeOptions = CacheStoreModule.buildStoreOption(options);

    return {
      module: RootCacheStoreModule,
      providers: [
        {
          provide: 'STORE_OPTION',
          useValue: storeOptions,
        },
      ],
      exports: ['STORE_OPTION'],
    };
  }
  static forFeature(storeName: storeOptions['store']): DynamicModule {
    const store = `${storeName.toUpperCase()} - Store`;

    return {
      module: CacheStoreModule,
      imports: [RootCacheStoreModule],
      providers: [
        {
          provide: 'STORE_OPTION',
          useFactory: (storeOpt: storeOptions) => {
            console.log('storeName:', store);
            const storeOptions = CacheStoreModule.buildStoreOption({
              size: storeOpt.size,
              store: storeName,
            });
            return storeOptions;
          },
          inject: ['STORE_OPTION'],
        },
      ],
      exports: ['STORE_OPTION'],
    };
  }

  private static buildStoreOption(options: storeOptions): storeOptions {
    return Object.assign<storeOptions, storeOptions>(
      {
        store: 'maria',
        size: 100,
      },
      options,
    );
  }
}

export default CacheStoreModule;
