import { Section, Spacer, SpacerSize, Text, Title, TitleLevels, TypographyBold } from '@trilogy-ds/react'

export function Statement() {
  return (
    <Section>
      <Title level={TitleLevels.TWO}>Statement</Title>
      <Text>
        Our sales team needs a quick overview of the mobile plans returned by the offers API (GET /api/offers). Using
        the list displayed below and the API response, implement the following features:
      </Text>
      <div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 1
          </Text>
          <Text>
            Display a summary showing how many plans belong to each category, for example "5G (4)". Each category must
            appear only once.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 2
          </Text>
          <Text>
            Make the search field work: only display plans whose name contains the typed text (case insensitive).
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 3
          </Text>
          <Text>
            Clicking the "Sort by price" button sorts the displayed plans from cheapest to most expensive. Clicking it
            again reverses the order. Sorting must keep working while a search is active.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
      </div>
      <div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 4
          </Text>
          <Text>
            Turn the summary of question 1 into filter buttons: one button per category with its count, e.g. "5G (4)",
            sorted in alphabetical order and using the category color from categoryColors.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 5
          </Text>
          <Text>
            When clicking on a category button, only display the plans of the selected category. The active button must
            be visually highlighted, and the filter must keep working with the search and the sort.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Question 6
          </Text>
          <Text>When clicking on the Reset button, display the complete list of plans again.</Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
        <div>
          <Text typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD} marginless>
            Bonus
          </Text>
          <Text>
            Allow selecting several categories at once. Explain whether a plan must match all the selected categories or
            at least one of them.
          </Text>
          <Spacer size={SpacerSize.THREE} />
        </div>
      </div>
      <div>
        <Text>
          <span className="has-text-weight-semibold">Exercise duration:</span> 30 minutes (+15 minutes for questions 4
          to 6)
        </Text>
      </div>
    </Section>
  )
}
