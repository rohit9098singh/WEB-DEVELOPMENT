#include <stdio.h>
#include <stdlib.h>

// Function to find the maximum value in the array
int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Counting sort function
void countingSort(int arr[], int size) {
    int max = findMax(arr, size);
    int *count = (int *)calloc(max + 1, sizeof(int));  // Allocate count array with zero initialization
    int *output = (int *)malloc(size * sizeof(int));   // Output array

    // Count the occurrence of each element in the original array
    for (int i = 0; i < size; i++) {
        count[arr[i]]++;
    }

    // Modify the count array by adding the previous counts (cumulative count)
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array using the count array
    for (int i = size - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    // Copy the sorted elements back to the original array
    for (int i = 0; i < size; i++) {
        arr[i] = output[i];
    }

    // Free allocated memory
    free(count);
    free(output);
}

// Function to print the array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int arr[] = {4, 2, 2, 8, 3, 3, 1};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("Original array:\n");
    printArray(arr, size);

    countingSort(arr, size);

    printf("Sorted array:\n");
    printArray(arr, size);

    return 0;
}
