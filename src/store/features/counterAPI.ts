interface countData { 
  data: number
}
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1): Promise<countData> {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }