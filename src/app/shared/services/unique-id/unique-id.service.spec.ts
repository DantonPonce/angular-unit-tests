import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdsWithPrefix.name} 
        should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdsWithPrefix('app-');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdsWithPrefix.name} 
        should not generate duplicate IDs when called mutiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdsWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds} 
        should return the number of generatedIds when called`, () => {
    service.generateUniqueIdsWithPrefix('app');
    service.generateUniqueIdsWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdsWithPrefix.name}
        should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdsWithPrefix(emptyValue!))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
    });
  });
});
