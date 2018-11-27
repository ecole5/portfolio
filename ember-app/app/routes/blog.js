import Route from '@ember/routing/route';

export default Route.extend({

    model() {

        return [{
            title: "GeoPredict",
            description: "This series of blog posts details the development of a novel machine learning solution called GeoPredict. I designed GeoPredict with the intent of leveraging large-scale mobility data in a commercially viable manner.",
            posts: [{
                title: "Part 1: Origins & Data Exploration",
                snippet: "In this segment we explore the origins of this effort and the data itself.",
                body: "<p><strong>Introduction</strong></p> <p>This series of blog posts details the development of a novel machine learning solution called GeoPredict. I designed GeoPredict with the intent of leveraging large-scale mobility data in a commercially viable manner. I conducted this effort on behalf of an industry partner while working in the laboratory of Dr. Miriam Capretz, Western Engineering Dean of Research, in my capacity as a Summer Research Associate.</p> <p>The first step towards the development of GeoPredict was gaining a solid understanding of the problem domain-the data. The data provided by my industry partner was not just raw mobility data but a richer set of contextual and semantic information. Let us try to unpack the structure of this data.</p>  <br><hr><img class='img-fluid' src='/img/blog/GeoPredict/1a.png'><p><hr><br><strong>Understanding the Data</strong></p> <p><strong>MobilityTrace &amp; Visit: </strong>We call a set of data a MobilityTrace and a discrete data point a Visit. My partner collected the provided MobilityTrace from their user base (millions of users) over a three month period.</p> <p><strong>Coordinate: </strong>A Visit is created when a Source captures a new Coordinate. A Coordinate contains the position of the Source (longitude and latitude) and the precision of this measurement.</p> <p><strong>Precision: </strong>Precision is the attribute of a Coordinate accounting for the uncertainty in the position calculation. It is the radius of the circle surrounding the given position. Each Source uses different methods for determining position. These include but are not limited to WiFi triangulation, cellular triangulation, and GPS. Each of these methods has different ranges of baseline precision that vary due to environmental factors.</p> <p><strong>Source: </strong>A Source itself is the specific platform upon which my partner&rsquo;s application runs. Sources include web browsers, mobile operating systems, and mobile browsers.&nbsp; As people tend to keep their cell phones on their person Visits collected from mobile Sources are vital because they serve as a better proxy for human mobility than static Sources such as a desktop web browser.</p> <p><strong>userID: </strong>A userID is an attribute assigned to each Visit to enable analysis on a per-user basis. A user could have multiple ids if they are not logged in across Sources. For privacy, my partner opted not to tie each Visit to a complete userProfile but only the numeric userID.&nbsp;</p> <p><strong>POI &amp; POIGroup: </strong>The most significant preprocessing step on the provided MobilityTrace was tagging each Visit with a commercial POI (point of interest). Each POI is an individual location belonging to a POIGroup. For example, Starbucks is a POIGroup, but the Starbucks with the address 1 Bayside Drive is a POI. POI tagging was accomplished using a commercial database licensed by my partner. My partner removed all Visits that could not be tagged.&nbsp; This purge is significant in that any value to be had from the MobilityTrace would relate to shopping trips as opposed to general mobility.</p> <p><strong>Unsupervised Approach</strong></p> <p>Once I fully understood the nature of the data, I turned my attention to refining my goal: what type of value could my solution deliver? My first intuition was to see if I could uncover any hidden structural value with an unsupervised learning approach. I started with just one feature, using the distance between the Coordinates to cluster the Visits with k-means. Upon inspection of the resulting clusters, I realized that I had stumbled upon a method of discovering POIs. At a low resolution the group labels represented entire geographic regions (cities and towns), but at a higher resolution, the labels signified POIs.</p> <p>By utilizing a third-party database, my partner was already able to label these clusters. I wondered, however, what would happen as new POIs emerged. Would my partner depend on their data provider to provide timely updates? Was there a way I could build a system to discover and label new POIs to break this dependence? I started brainstormed some potential solutions.</p> <p>The first approach that came to mind was to match the cluster coordinates to an address on a city map and then build a web crawler to find mentions of the address on social media with the intention of extracting a POI name. Another potential solution would be to collect photos geotagged with cluster&rsquo;s coordinates and use computer vision techniques to obtain the names of the storefronts in these pictures. I reckoned Google might use a similar approach with the vast amount of Street View imagery.&nbsp; Although both these techniques were of interest to me from an academic standpoint, they were outside my operating parameters in that in that they would require additional data (city maps, user photos) and thus not be commercially viable to my partner.</p> <p>I continued by trying to cluster a higher dimensional set of features considering time, distance and category. I used principal component analysis to produce a unified distance metric for input into k-means. Upon inspection of the results, I was unable to draw any useful conclusions. I decided it was time to move on.</p> <p><strong>Supervised Approach: Recommender Systems</strong></p> <p>Frustrated with my lack of progress I resolved to binge-watch an entire season of Stranger Things on Netflix. Upon completion of the season, I was left impressed. Not just by the wonderfully nostalgic world of Hawkins but with Netflix's suggestion for what I might watch next.&nbsp; Netflix aptly combined the context of Stranger Things with my viewing habits to come up with a strong set of candidates. It was the idea of context that intrigued me. If I liked Stranger Things, then I would probably like Aliens too. Could I use the context of a recent Visit to predict the next one?</p> <p>What makes the ability to predict a user's next Visit valuable? Suppose a user, Alice, is currently at a Goodlife Fitness and we have a recommender system predict that she will go to McDonald's next. Other business in the Food &amp; Beverage space could participate in a real-time bid for the ability to market to Alice right before she makes her decision. The confidence of the recommendation could help the bidders tune their bids.&nbsp; A second potential application is an emergency alert system. Let us say that the police just evacuated the McDonalds Alice was likely to visit; an alert could be sent to Alice warning her to steer clear. The applications of these recommendations go on and on- the value is obvious. Additionally, the system seemed feasible given the MobilityTrace I was working with and my time constraints. Thus my goal was clear-build a near real-time recommender system for shopping trip forecasting.</p>"
            },
            {
                title: "Ngrams",
                snippet: "cool",
                body: "<p><strong>A Foundation</strong></p> <p>Language is such an ambiguous construct that an entire subfield of AI exists focusing exclusively on its minutia. When reviewing literate on next location recommenders, I realized that despite using different monikers the essence of the best approach was equivalent to that of a well-established technique from NLP called Ngram modeling. I implemented this technique as the basis of GeoPredict making modifications and enhancements for the mobility domain along the way.</p> <p>To illustrate the fascinating connection between NLP and mobility I will explain Ngram modeling from the perspective of natural languages and later make the bridge to the mobility domain. This explanation is rather formal so do bear with me.</p> <p>Let the occurrence of a word w in a corpus (training text) be an event. If we consider each event to be independent, the probability of any given event is simple:</p> <figure class='highlight'> <pre>P(x) = occurrences of w in corpus / total number of words in corpus</pre> </figure> <p>Thus, an elementary language model (unigram model) would only contain counts of different words. Unigram models are poor because they do not capture structure. Words are not put together randomly but are ordered to adhere to a grammar. To build a better model, we must capture this structure. Therefore, we consider the probability of an event as conditional on the ones that came before.</p> <p>Consider we observe a sequence of new events &ldquo;the fox jumps.&rdquo; The probability of the event &ldquo;jumps&rdquo; is dependent on the sequence &ldquo;the fox&rdquo; appearing before it. Thus, we can write the conditional probability as:</p> <p class='text-center'><em>P(jumps | the fox) = P(the fox jumps)/P(the fox)</em></p> <p>To calculate this probability, our model must contain counts of sequences of words. We call these sequences Ngrams, hence the name Ngram modeling. The length of an Ngram is indicated by its prefix.</p> <p class='text-center'><em>Unigram -&gt; one word (no context- initial model)</em><br /><em>Bigram -&gt; two words (one word of context)</em><br /><em>Trigram -&gt; three word (two words of context)</em></p> <p>Consider P(jumps| the fox) again. To find the conditional probability, we will need to find the probability of the bigram &ldquo;the fox&rdquo; and the trigram &ldquo;the fox jumps.&rdquo; We calculate these probabilities by using the counts from a trigram model. Note we can derive bigram counts of &ldquo;the fox&rdquo; just by adding up all trigrams that contain that bigram.</p> <p class='text-center'><em>Let C(x) be a count function for a specific sequence x </em><br /><em>Let T be the number of grams in the corpus with length indicated by the subscript</em><br /><em>P (the fox jumps) = C(the fox jumps)/T<sub>3</sub></em><br /><em>P(the fox) = C(the fox)/T<sub>2</sub></em><br /><em>* Together then: P(jumps | the fox) = C(the fox jumps)/N<sub>3</sub> / C(the fox)/N<sub>2</sub></em></p> <p>We can simplify * because N<sub>2</sub> will always be one more than N3. For large counts this tiny difference will not significantly impact the probability- we almost have symmetry. Let us use a concrete example to prove this.</p> <p class='text-center'><em>Corpus: &ldquo;The fox is the fox and when the fox jumps he howls&rdquo;</em><br /><em> C(the fox jumps) = 1</em><br /><em>C(the fox) = 3</em><br /><em>N<sub>3</sub> = 10 and thus N<sub>2</sub> must equal 11</em><br /><em>Proof: 1/10 / 3/11 approximately equal to 1/3</em></p> <p><strong>Markov Assumption</strong></p> <p>Thus far we have assumed a limited context of just two words &ldquo;the fox&rdquo;. What if we had an entire sentence of context? Should we keep Ngrams of extended sequences? As empirically observed, keeping bigrams or trigrams will be sufficient. This idea is called the Markov assumption. The probability of a word depends most strongly on the previous few words.</p> <p><strong>Making Predictions<br /></strong></p> <p>We have seen thus far how we find the probability for a specified event given context but what if we have context and need to make a prediction? Consider the context &ldquo;the fox,&rdquo; how do we decide which word comes next? We use our Ngram model to build a probability distribution using the counts of all trigrams which start with the bigram 'the fox.'</p> <p class='text-center'><em>The fox goes =2 </em><br /><em>The fox eats = 3 </em><br /><em>The fox snoozes =4 </em><br /><em>This yield a distribution with 2/9, 3/9, 2/9.</em></p> <p>Looking at this distribution, we would choose &ldquo;eats&rdquo; as the most likely next event because it has the highest probability. Utilizing an Ngram model in such a way is called Maximum Likelihood Estimation (MLE).</p> <p>Now that we understand Ngram modeling it is time to see how we can apply it to the mobility domain. Read the next blog post to find out!</p>",
            }


            ]


        }, {
            title: "Predict Engine",
            posts: [
                {
                    title: "Part 1",
                    snippet: "Part 2 conent"

                }, {
                    title: "Part 1",
                    snippet: "Part 2 conent"
                }
            ]
        }];







    }
});
