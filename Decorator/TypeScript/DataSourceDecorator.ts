// Decorator

interface DataSource {
  writeData(data: string)
  readData(): string
}

class FileDataSource implements DataSource {
  fileName: string
  constructor (fileName: string) { 
    this.fileName = fileName;
  }
  
  writeData(data: string) {
    // Write data to file.
    console.log("FileDataSource: ", data)
  }
  
  readData(): string {
    // Read data from file.
    return "file-data..."
  }
}

class DataSourceDecorator implements DataSource {

  private wrappee: DataSource
  
  constructor (source: DataSource){
    this.wrappee = source
  }
  
  writeData(data){
    this.wrappee.writeData(data)
  }
  
  readData(): string {
    return this.wrappee.readData()
  }
}
  
class EncryptionDecorator extends DataSourceDecorator {
    writeData(data: string) {
        const result = `encrypted>${data}`;
        // console.log("Encryption result: ", result);        
        super.writeData(result)
    }
    readData(): string {
        return super.readData().replace(/encrypted>/g, "");
    }   
}

class CompressionDecorator extends DataSourceDecorator{
  
    writeData(data: string) {
        const result = `compressed>${data}`;
        // console.log("Compression result: ", result);        
        super.writeData(result)

    }
    readData(): string {
        return super.readData().replace(/compressed>/g, "");
    }

}

function main(){
  let salaryRecords = 'Foo received 1 dolar;Bar received 3 dolars;'

  let source = new FileDataSource("somefile.dat")
  source.writeData(salaryRecords)
  
  source = new CompressionDecorator(source)
  source.writeData(salaryRecords)
  
  source = new EncryptionDecorator(source)
  source.writeData(salaryRecords)
} 

main();