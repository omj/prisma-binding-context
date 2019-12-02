import {
  ApolloLink,
  Operation,
  NextLink,
  Observable,
  FetchResult,
} from 'apollo-link'

export class SharedLink extends ApolloLink {
  private innerLink?: ApolloLink

  setInnerLink(innerLink: ApolloLink) {
    this.innerLink = innerLink
  }

  request(
    operation: Operation,
    forward?: NextLink,
  ): Observable<FetchResult> | null {
    if (!this.innerLink) {
      throw new Error('No inner link set')
    }

    // operation.setContext(operation.getContext().graphqlContext)

    operation.setContext({
      ...operation.getContext(),
      //headers: { superHeader: 123 },
      headers: operation.getContext().graphqlContext.headers,
    })

    console.log(
      'SharedLink.ts',
      'request',
      JSON.stringify(operation.getContext()),
    )

    return this.innerLink.request(operation, forward)
  }
}
