import { CoreModule } from '../../core.module';

describe(`EnsureModuleLoadedOnceGuard`, function () {
  test(`should throw an error if loaded more than once`, function () {
    // It throws when it receives itself:
    expect(() => {
      new CoreModule(CoreModule);
    }).toThrow();

    // In any other case `parentModule` will be undefined:
    expect(() => {
      new CoreModule(void 0 as any);
    }).not.toThrow();
  });
});
