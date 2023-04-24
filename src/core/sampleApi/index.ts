import * as repository from './data/repository';
import * as interactor from './domain/interactor';

export * from './data/mock';
export * from './domain/usecase';
export * from './domain/entity';

// interactorにrepositoryをDIしてexport
export const sampleInteractor = interactor.sampleInteractor(repository.sampleRepository());
