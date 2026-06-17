/**
 * Custom error classes for content-related errors
 * Provides better error handling and debugging
 */

export class ContentValidationError extends Error {
  public readonly type: string;
  public readonly details: Record<string, unknown>;

  constructor(
    message: string,
    type: string = "ContentValidationError",
    details: Record<string, unknown> = {}
  ) {
    super(message);
    this.name = type;
    this.type = type;
    this.details = details;
    
    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ContentValidationError);
    }
  }

  /**
   * Format error for display
   */
  public format(): string {
    return `[${this.type}] ${this.message}` + 
      (Object.keys(this.details).length > 0 
        ? `\nDetails: ${JSON.stringify(this.details, null, 2)}`
        : "");
  }
}

export class ImageValidationError extends ContentValidationError {
  constructor(
    message: string,
    public readonly imagePath: string,
    public readonly filePath?: string
  ) {
    super(message, "ImageValidationError", { imagePath, filePath });
  }
}

export class SchemaValidationError extends ContentValidationError {
  constructor(
    message: string,
    public readonly schemaName: string,
    public readonly validationErrors: Array<{ path: string; message: string }>
  ) {
    super(message, "SchemaValidationError", { schemaName, errors: validationErrors });
  }
}

export class MissingContentError extends ContentValidationError {
  constructor(
    message: string,
    public readonly contentType: string,
    public readonly slug?: string
  ) {
    super(message, "MissingContentError", { contentType, slug });
  }
}

export class RegionValidationError extends ContentValidationError {
  constructor(
    message: string,
    public readonly region: string,
    public readonly validRegions: string[]
  ) {
    super(message, "RegionValidationError", { region, validRegions });
  }
}

export class CollectionValidationError extends ContentValidationError {
  constructor(
    message: string,
    public readonly collection: string,
    public readonly validCollections: string[]
  ) {
    super(message, "CollectionValidationError", { collection, validCollections });
  }
}

/**
 * Error handling utilities
 */
export function handleValidationError(error: unknown): never {
  if (error instanceof ContentValidationError) {
    console.error(error.format());
    process.exit(1);
  } else if (error instanceof Error) {
    console.error(`[Unexpected Error] ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
  
  throw error;
}

/**
 * Safe parse with error handling
 */
export function safeParse<T>(
  schema: { safeParse: (data: unknown) => { success: boolean; data?: T; error?: { issues: any[] } } },
  data: unknown,
  context: string = "unknown"
): T {
  const result = schema.safeParse(data);
  
  if (!result.success && result.error) {
    const issues = result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));
    
    throw new SchemaValidationError(
      `Validation failed for ${context}`,
      context,
      issues
    );
  }
  
  return result.data as T;
}
