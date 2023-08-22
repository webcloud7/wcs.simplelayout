<script>
import { h } from "vue";

export default {
  props: {
    customTemplate: {
      type: String,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },

  render() {
    const blockData = this.block;
    const component = {
      template: this.customTemplate,
      data() {
        return { block: blockData };
      },
    };
    return h(component);
  },
};
</script>
