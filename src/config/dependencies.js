import AccountsRepositoryInMemory from '../accounts/repositories/MemoryRepository';
import MongoRepository from '../accounts/repositories/MongoRepository';

const buildDependencies = () => {
  const dependencies = {
  };

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === "mongo") {
    dependencies.accountsRepository = new MongoRepository();
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
