export interface TranslationProvider {
  readonly name: string

  translate(input: TranslateParams): Promise<ITranslation | null>
}

export interface TranslateParams {
  text: string

  sourceLang?: string

  targetLang?: string

  engines?: string[]
}

export interface ITranslation {
  /**
   * 翻译引擎
   */
  engine: string
  /**
   * 发音
   */
  phonetic?: string
  /**
   * 简释
   */
  paraphrase?: string
  /**
   * 详细释义
   */
  explains?: string[]
}

export type Constructor<T> = new (...args: any[]) => T
