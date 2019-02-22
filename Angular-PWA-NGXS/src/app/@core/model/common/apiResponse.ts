export class ApiResponse<T> {
    Version: string;
    StatusCode: number;
    Message: string;
    Errors: string[];
    Result: T;
}
