import AccountsRepositoryInMemory from '../accounts/repositories/MemoryRepository';
import MongoRepository from '../accounts/repositories/MongoRepository';
import GenreMongoRepository from '../genres/repositories/MongoRepository';
import AccountSchema from '../accounts/validators';
import Authenticator from '../accounts/security/BCryptAuthenticator';
import TokenManager from '../accounts/security/JWTToken';

const buildDependencies = () => {
  const dependencies = {
    authenticator: new Authenticator()
  };

  dependencies.accountSchema = AccountSchema;
  dependencies.tokenManager = new TokenManager();

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === "mongo") {
    dependencies.accountsRepository = new MongoRepository();
    dependencies.genreRepository = new GenreMongoRepository();
    
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
