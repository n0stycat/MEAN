declare var M // typescript fix

export class MaterialService {
  static toast(message: string) {
    M.toast({html: message})
  }
}
